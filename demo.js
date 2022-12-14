import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, Modal } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  HatenaIcon,
} from 'react-share';

const shareUrl = 'http://github.com';
const title = 'GitHub';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [link, setLink] = useState(shareUrl);
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div>
      <Button
        type="dashed"
        style={{ backgroundColor: 'black' }}
        onClick={showModal}
        icon={<ShareAltOutlined style={{ fontSize: '16px', color: 'white' }} />}
        size={100}
        shape="circle"
      ></Button>
      <Modal
        title="Share"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="Demo__container">
          <div className="Demo__some-network">
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=": "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="Demo__some-network">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
          </div>
          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>

          <div className="Demo__some-network">
            <PinterestShareButton
              url={String(window.location)}
              className="Demo__some-network__share-button"
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>

          <div className="Demo__some-network">
            <VKShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <VKIcon size={32} round />
            </VKShareButton>
          </div>
          <div className="Demo__some-network">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>

          <div className="Demo__some-network">
            <TumblrShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TumblrIcon size={32} round />
            </TumblrShareButton>
          </div>

          <div className="Demo__some-network">
            <LivejournalShareButton
              url={shareUrl}
              title={title}
              description={shareUrl}
              className="Demo__some-network__share-button"
            >
              <LivejournalIcon size={32} round />
            </LivejournalShareButton>
          </div>

          <div className="Demo__some-network">
            <MailruShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <MailruIcon size={32} round />
            </MailruShareButton>
          </div>

          <div className="Demo__some-network">
            <EmailShareButton
              url={shareUrl}
              subject={title}
              body="body"
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
          <div className="Demo__some-network">
            <ViberShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <ViberIcon size={32} round />
            </ViberShareButton>
          </div>

          <div className="Demo__some-network">
            <WorkplaceShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <WorkplaceIcon size={32} round />
            </WorkplaceShareButton>
          </div>

          <div className="Demo__some-network">
            <LineShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>
          <div className="Demo__some-network">
            <PocketShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <PocketIcon size={32} round />
            </PocketShareButton>
          </div>

          <div className="Demo__some-network">
            <InstapaperShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <InstapaperIcon size={32} round />
            </InstapaperShareButton>
          </div>

          <div className="Demo__some-network">
            <HatenaShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="Demo__some-network__share-button"
            >
              <HatenaIcon size={32} round />
            </HatenaShareButton>
          </div>
        </div>
        <div className="container">
          <input
            type="text"
            value={link}
            placeholder="Type some text here"
            onChange={(event) => setLink(event.target.value)}
            style={{ backgroundColor: 'black', color: 'white' }}
          />
          <CopyToClipboard text={link} onCopy={onCopyText}>
            <div className="copy-area">
              <button style={{ color: 'white', backgroundColor: 'purple' }}>
                Copy to Clipboard
              </button>
              <span className={`copy-feedback ${isCopied ? 'active' : ''}`}>
                Copied!
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Modal>
    </div>
  );
};
export default App;
