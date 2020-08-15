const cache: { [k: string]: HTMLImageElement } = {};

function _isImage(image: string | HTMLImageElement): image is HTMLImageElement {
    return '[object HTMLImageElement]' === Object.prototype.toString.call(image);
}

// /^rgba\((?:\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5]),(?:\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5]),(?:\d|\d{2}|1\d{2}|2[0-4]\d|25[0-5]),(?:0\.d+|1)\)$/

export default function loadImage (url: string | HTMLImageElement): Promise<HTMLImageElement> {

    return new Promise((resolve, reject) => {
        if (_isImage(url)) {
            resolve(url);
        } else if (/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(url)) {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;
            const context = canvas.getContext('2d') as CanvasRenderingContext2D;
            context.fillStyle = url;
            context.fillRect(0, 0, 1, 1);
            loadImage(canvas.toDataURL()).then(resolve);
        } else {
            if (cache[url]) {
                resolve(cache[url]);
                return;
            }

            const img = new Image();
            img.setAttribute("crossOrigin",'Anonymous');
            img.onload = () => {
                cache[url] = img;
                resolve(img);
            };
            img.onerror = reject;
            img.src = url;
        }
    });
}