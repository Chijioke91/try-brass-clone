import { useEffect, useRef } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import './VideoModal.css';

export default function VideoModal({ isOpen, onCloseModal }) {
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = isOpen;

    return () => {
      openRef.current = false;
    };
  }, [isOpen]);

  return (
    <>
      <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId="637218269"
        onClose={onCloseModal}
      />
    </>
  );
}
