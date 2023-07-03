import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import React from 'react';

const { Dragger } = Upload;

const FileInput = (props) => {
  const { onFileUpload = () => {} } = props;

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    action(file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (!event?.target) return;

        const contents = event.target.result;
        onFileUpload(contents);
      };
      reader.readAsText(file);

      return Promise.reject();
    },
  };

  return (
    <Dragger {...uploadProps}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>
        Click or drag file to this area to upload
      </p>
    </Dragger>
  );
};

export default FileInput;
