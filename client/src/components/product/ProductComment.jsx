import React, { useEffect, useState } from "react";
import { Tabs, message, Tooltip } from "antd";
import {
  addNewComment,
  getAllComments,
  deleteComment,
  getCommentsByProductID,
} from "../../services/comment-service";
import { DeleteOutlined } from "@ant-design/icons";
import "./comment.css";

const { TabPane } = Tabs;

const ProductComment = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  console.log(data);

  useEffect(() => {
    getCommentsByProductID(data?._id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [data]);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const newComment = {
        comment: commentText,
        user: localStorage.getItem("id"),
        productID: data?._id,
      };

      if (!localStorage.getItem("id")) {
        return message.error(
          "You have no Account! Please login to add a comment."
        );
      }

      const response = await addNewComment(newComment);

      if (response.status === 200) {
        const updatedComments = await getCommentsByProductID(data?._id);
        setComments(updatedComments);
        setCommentText("");
        message.success("Comment added successfully!");
      } else {
        message.error("Failed to add comment.");
      }
    } catch (error) {
      message.error("An error occurred while adding the comment.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await deleteComment(commentId);

      if (response.status === 200) {
        setComments(comments.filter((comment) => comment._id !== commentId));
        message.success(response.message || "Comment deleted successfully!");
      } else {
        message.error("Failed to delete comment.");
      }
    } catch (error) {
      message.error("An error occurred while deleting the comment.");
    }
  };

  return (
    <>
      <div className="my-10 md:mx-20 mx-8 p-4 border-2 border-gray-400">
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <TabPane tab="Description" key="1">
            <p>{data?.desc}</p>
          </TabPane>
          <TabPane tab="Comments" key="2">
            <div className="comment-section">
              <form
                onSubmit={handleCommentSubmit}
                className="flex flex-col mb-4"
              >
                <label htmlFor="comment" className="font-bold mb-2">
                  Add a Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={commentText}
                  onChange={handleCommentChange}
                  className="border-2 border-gray-400 rounded-md p-2 mb-2 min-h-[150px]"
                  placeholder="Write your comment here..."
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
                >
                  Submit Comment
                </button>
              </form>

              <div className="comments-list">
                {comments?.map((comment) => (
                  <div
                    key={comment._id}
                    className="comment-item border-b border-gray-300 mb-4 pb-4 relative group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold">
                          {comment?.user?.firstName} {comment?.user?.lastName}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {comment?.createdAt.slice(0, 10)}
                        </p>
                      </div>
                      {localStorage.getItem("id") === comment?.user?._id && (
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          className="delete-icon opacity-0 transition-opacity duration-200"
                        >
                          <Tooltip title="Delete">
                            <DeleteOutlined className="text-xl hover:text-red-600 transition-all" />
                          </Tooltip>
                        </button>
                      )}
                    </div>
                    <p className="text-gray-800">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabPane>

          <TabPane tab="Reviews" key="3">
            <p>This is where the reviews section will appear.</p>
          </TabPane>
          <TabPane tab="Size Chart" key="4">
            <p>This is where the size chart will appear.</p>
          </TabPane>
          <TabPane tab="Shipping Policy" key="5">
            <p>This is where the shipping policy section will appear.</p>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default ProductComment;
