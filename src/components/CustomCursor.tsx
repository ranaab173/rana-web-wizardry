import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = () => {
      setFollowerPosition(prev => {
        const speed = 0.15;
        return {
          x: prev.x + (position.x - prev.x) * speed,
          y: prev.y + (position.y - prev.y) * speed,
        };
      });
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    document.addEventListener('mousemove', updateCursor);
    updateFollower();

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: `${followerPosition.x - 20}px`,
          top: `${followerPosition.y - 20}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;