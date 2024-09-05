import React, { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./index.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const { Panel } = Collapse;

const FAQPage = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleExpandChange = (key) => {
    setActiveKey(key === activeKey ? null : key);
  };

  const customExpandIcon = (panelProps) => {
    const isActive = activeKey === panelProps.panelKey;
    return isActive ? <MinusOutlined /> : <PlusOutlined />;
  };

  return (
    <>
      <Header />
      <div className="faq-container">
        <div className="breadcrumb flex items-center justify-center mt-4 text-sm text-gray-500 bg-[#F6F6F6] py-12">
          <span>HOME</span> <span className="mx-2">/</span> <span>FAQ</span>
        </div>

        <div className="faq-content my-24 text-center">
          <h1 className="text-4xl font-semibold">FAQ</h1>
          <p className="text-gray-500 mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical literature.
          </p>

          <div className="faq-items mt-8 md:max-w-5xl px-6 mx-auto">
            <Collapse
              accordion
              activeKey={activeKey}
              onChange={handleExpandChange}
              expandIconPosition="right"
              expandIcon={(panelProps) => customExpandIcon(panelProps)}
            >
              <Panel header="How do I sign up?" key="1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi cupiditate et laudantium esse adipisci consequatur modi
                  possimus accusantium vero atque excepturi nobis in doloremque
                  repudiandae soluta non minus dolore voluptatem enim reiciendis
                  officia voluptates, fuga ullam? Voluptas reiciendis cumque
                  molestiae unde numquam similique quas doloremque non,
                  perferendis doloribus necessitatibus itaque dolorem quam
                  officia atque perspiciatis dolore laudantium dolor voluptatem
                  eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit
                  ullam, consequuntur, saepe voluptas quaerat deleniti.
                  Repellendus magni sint temporibus, accusantium rem commodi.
                </p>
              </Panel>
              <Panel header="How do I delete my account?" key="2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi cupiditate et laudantium esse adipisci consequatur modi
                  possimus accusantium vero atque excepturi nobis in doloremque
                  repudiandae soluta non minus dolore voluptatem enim reiciendis
                  officia voluptates, fuga ullam? Voluptas reiciendis cumque
                  molestiae unde numquam similique quas doloremque non,
                  perferendis doloribus necessitatibus itaque dolorem quam
                  officia atque perspiciatis dolore laudantium dolor voluptatem
                  eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit
                  ullam, consequuntur, saepe voluptas quaerat deleniti.
                  Repellendus magni sint temporibus, accusantium rem commodi.
                </p>
              </Panel>
              <Panel
                header="Can I have an invoice for my subscription?"
                key="3"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi cupiditate et laudantium esse adipisci consequatur modi
                  possimus accusantium vero atque excepturi nobis in doloremque
                  repudiandae soluta non minus dolore voluptatem enim reiciendis
                  officia voluptates, fuga ullam? Voluptas reiciendis cumque
                  molestiae unde numquam similique quas doloremque non,
                  perferendis doloribus necessitatibus itaque dolorem quam
                  officia atque perspiciatis dolore laudantium dolor voluptatem
                  eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit
                  ullam, consequuntur, saepe voluptas quaerat deleniti.
                  Repellendus magni sint temporibus, accusantium rem commodi.
                </p>
              </Panel>
              <Panel header="How can I access my account data?" key="4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quasi cupiditate et laudantium esse adipisci consequatur modi
                  possimus accusantium vero atque excepturi nobis in doloremque
                  repudiandae soluta non minus dolore voluptatem enim reiciendis
                  officia voluptates, fuga ullam? Voluptas reiciendis cumque
                  molestiae unde numquam similique quas doloremque non,
                  perferendis doloribus necessitatibus itaque dolorem quam
                  officia atque perspiciatis dolore laudantium dolor voluptatem
                  eligendi? Aliquam nulla unde voluptatum molestiae, eos fugit
                  ullam, consequuntur, saepe voluptas quaerat deleniti.
                  Repellendus magni sint temporibus, accusantium rem commodi.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
