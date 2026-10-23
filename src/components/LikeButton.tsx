import { useLikes } from '../context/LikesContext';

type LikeButtonProps = {
  postId: number;
};

function LikeButton({ postId }: LikeButtonProps) {
  const { likedIds, toggleLike } = useLikes();
  const liked = likedIds.includes(postId);

  return (
    <button
      type="button"
      className={liked ? 'like-btn liked' : 'like-btn'}
      onClick={() => toggleLike(postId)}
      aria-pressed={liked}
    >
      {liked ? '♥ Liked' : '♡ Like'}
    </button>
  );
}

export default LikeButton;
