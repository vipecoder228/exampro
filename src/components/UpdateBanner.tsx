import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const GITHUB_REPO = 'vipecoder228/exampro';
const CURRENT_VERSION = '1.1.0';

export default function UpdateBanner() {
  const [updateUrl, setUpdateUrl] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const lastDismissed = localStorage.getItem('exampro-update-dismissed');
    if (lastDismissed === CURRENT_VERSION) return;

    fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`)
      .then((res) => res.json())
      .then((data) => {
        if (data.tag_name && data.tag_name !== `v${CURRENT_VERSION}`) {
          const apk = data.assets?.find((a: { name: string }) => a.name === 'app-debug.apk');
          if (apk) {
            setUpdateUrl(apk.browser_download_url);
          }
        }
      })
      .catch(() => {});
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem('exampro-update-dismissed', CURRENT_VERSION);
  };

  if (!updateUrl || dismissed) return null;

  return (
    <div className="border-b px-4 py-2 flex items-center justify-between gap-3" style={{ background: 'var(--accent)', color: '#fff' }}>
      <div className="flex items-center gap-2 text-sm">
        <Download size={16} />
        <span>Доступно обновление! Скачай новую версию приложения.</span>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={updateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-md text-xs font-bold transition-opacity hover:opacity-80"
          style={{ background: '#fff', color: 'var(--accent)' }}
        >
          Скачать
        </a>
        <button onClick={dismiss} className="p-1 hover:opacity-70">
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
