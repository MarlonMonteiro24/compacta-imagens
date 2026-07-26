"use client";

import { ChangeEvent, DragEvent, useCallback, useEffect, useRef, useState } from "react";

type ImageInfo = {
  file: File;
  url: string;
  width: number;
  height: number;
};

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
};

export default function Home() {
  const [image, setImage] = useState<ImageInfo | null>(null);
  const [quality, setQuality] = useState(70);
  const [scale, setScale] = useState(100);
  const [outputUrl, setOutputUrl] = useState("");
  const [outputSize, setOutputSize] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    if (image?.url) URL.revokeObjectURL(image.url);
    if (outputUrl) URL.revokeObjectURL(outputUrl);
    setImage(null);
    setOutputUrl("");
    setOutputSize(0);
    setError("");
  }, [image, outputUrl]);

  const loadFile = useCallback((file?: File) => {
    setError("");
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Escolha um arquivo de imagem válido.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("A imagem deve ter no máximo 20 MB.");
      return;
    }

    const url = URL.createObjectURL(file);
    const preview = new Image();
    preview.onload = () => {
      setImage((previous) => {
        if (previous?.url) URL.revokeObjectURL(previous.url);
        return { file, url, width: preview.naturalWidth, height: preview.naturalHeight };
      });
      setQuality(70);
      setScale(100);
    };
    preview.onerror = () => {
      URL.revokeObjectURL(url);
      setError("Não foi possível abrir esta imagem.");
    };
    preview.src = url;
  }, []);

  useEffect(() => {
    if (!image) return;
    let cancelled = false;
    const timer = window.setTimeout(() => {
      setIsProcessing(true);
      const source = new Image();
      source.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale / 100));
        canvas.height = Math.max(1, Math.round(image.height * scale / 100));
        const context = canvas.getContext("2d");
        if (!context) return;
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(source, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (!blob || cancelled) return;
          setOutputUrl((previous) => {
            if (previous) URL.revokeObjectURL(previous);
            return URL.createObjectURL(blob);
          });
          setOutputSize(blob.size);
          setIsProcessing(false);
        }, "image/jpeg", quality / 100);
      };
      source.src = image.url;
    }, 180);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [image, quality, scale]);

  const onInput = (event: ChangeEvent<HTMLInputElement>) => loadFile(event.target.files?.[0]);
  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    loadFile(event.dataTransfer.files?.[0]);
  };

  const savings = image && outputSize
    ? Math.max(0, Math.round((1 - outputSize / image.file.size) * 100))
    : 0;
  const outputWidth = image ? Math.round(image.width * scale / 100) : 0;
  const outputHeight = image ? Math.round(image.height * scale / 100) : 0;
  const downloadName = image
    ? `${image.file.name.replace(/\.[^.]+$/, "")}-compactada.jpg`
    : "imagem-compactada.jpg";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Compacta início">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>compacta.</span>
        </a>
        <span className="privacy-pill"><span aria-hidden="true">●</span> Tudo acontece no seu navegador</span>
      </header>

      <section className="hero">
        <div className="eyebrow"><span>✦</span> MENOS PESO, MESMA HISTÓRIA</div>
        <h1>Imagens mais leves.<br /><em>Simples assim.</em></h1>
        <p>Reduza o tamanho das suas imagens sem complicação.<br className="desktop-break" /> Rápido, privado e direto no seu navegador.</p>
      </section>

      <section className={`workspace ${image ? "has-image" : ""}`} aria-live="polite">
        {!image ? (
          <div
            className={`dropzone ${isDragging ? "dragging" : ""}`}
            onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
          >
            <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={onInput} hidden />
            <div className="upload-icon" aria-hidden="true">↑</div>
            <h2>Solte sua imagem aqui</h2>
            <p>ou escolha um arquivo do seu computador</p>
            <button className="primary-button" onClick={() => inputRef.current?.click()}>
              Escolher imagem <span aria-hidden="true">→</span>
            </button>
            <small>JPG, PNG ou WEBP · até 20 MB</small>
          </div>
        ) : (
          <>
            <div className="preview-panel">
              <div className="panel-heading">
                <div>
                  <span className="label">PRÉ-VISUALIZAÇÃO</span>
                  <strong>{image.file.name}</strong>
                </div>
                <button className="text-button" onClick={reset}>Trocar imagem</button>
              </div>
              <div className="image-stage">
                <img src={outputUrl || image.url} alt="Prévia da imagem comprimida" />
                {isProcessing && <span className="processing">Atualizando…</span>}
              </div>
              <div className="image-meta">
                <span>{outputWidth} × {outputHeight} px</span>
                <span>JPG</span>
              </div>
            </div>

            <aside className="controls-panel">
              <div>
                <span className="label">AJUSTES</span>
                <h2>Encontre o equilíbrio ideal</h2>
                <p>Altere os controles e veja o resultado na hora.</p>
              </div>

              <div className="control-group">
                <div className="control-title"><label htmlFor="quality">Qualidade</label><strong>{quality}%</strong></div>
                <input id="quality" type="range" min="10" max="95" value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
                <div className="range-notes"><span>Arquivo menor</span><span>Mais detalhes</span></div>
              </div>

              <div className="control-group">
                <div className="control-title"><label htmlFor="scale">Dimensões</label><strong>{scale}%</strong></div>
                <input id="scale" type="range" min="25" max="100" step="5" value={scale} onChange={(e) => setScale(Number(e.target.value))} />
                <div className="range-notes"><span>Menor</span><span>Tamanho original</span></div>
              </div>

              <div className="result-card">
                <div><span>Original</span><strong>{formatBytes(image.file.size)}</strong></div>
                <span className="result-arrow" aria-hidden="true">→</span>
                <div><span>Novo tamanho</span><strong>{outputSize ? formatBytes(outputSize) : "—"}</strong></div>
                <div className="savings"><span>Você economizou</span><strong>{savings}%</strong></div>
              </div>

              <a className={`download-button ${!outputUrl ? "disabled" : ""}`} href={outputUrl || undefined} download={downloadName}>
                Baixar imagem <span aria-hidden="true">↓</span>
              </a>
              <p className="privacy-note"><span aria-hidden="true">●</span> Sua imagem nunca sai deste dispositivo.</p>
            </aside>
          </>
        )}
        {error && <p className="error-message" role="alert">{error}</p>}
      </section>

      <footer>
        <span>Grátis. Privado. Sem cadastro.</span>
        <span>Feito para deixar a web mais leve.</span>
      </footer>
    </main>
  );
}
