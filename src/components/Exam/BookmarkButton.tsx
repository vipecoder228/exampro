import { Bookmark } from 'lucide-react';
import { useProgressStore } from '../../store/useProgressStore';

export default function BookmarkButton({ questionId }: { questionId: string }) {
  const bookmarks = useProgressStore((s) => s.bookmarks);
  const addBookmark = useProgressStore((s) => s.addBookmark);
  const removeBookmark = useProgressStore((s) => s.removeBookmark);

  const isBookmarked = bookmarks.some((b) => b.questionId === questionId);

  const toggle = () => {
    if (isBookmarked) {
      removeBookmark(questionId);
    } else {
      addBookmark({
        questionId,
        addedAt: new Date().toISOString(),
        nextReview: new Date(Date.now() + 86400000).toISOString(),
        reviewCount: 0,
      });
    }
  };

  return (
    <button onClick={toggle} className="p-1 hover:opacity-70 transition-opacity" title={isBookmarked ? 'Убрать из закладок' : 'В закладки'}>
      <Bookmark
        size={16}
        fill={isBookmarked ? 'var(--accent)' : 'none'}
        color={isBookmarked ? 'var(--accent)' : 'var(--text-secondary)'}
      />
    </button>
  );
}
