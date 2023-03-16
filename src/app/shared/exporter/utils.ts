export const getExportName = (label: string, extension: string) => {
    const prefix = label
        .split(' ')
        .map((x) => x.toLowerCase())
        .join('_');
    const date = new Date();
    const timestamp = `${date.getFullYear()}_${
        date.getMonth() + 1
    }_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
    return `${prefix}_${timestamp}.${extension}`;
};

export const download = (content: string, type: string, label: string) => {
    const filename = getExportName(label, String(type.split('/').pop()));
    const blob = new Blob([content], { type });
    const downloadURL = window.URL.createObjectURL(blob);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', downloadURL);
    downloadAnchorNode.setAttribute('download', filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

export default { getExportName, download };
