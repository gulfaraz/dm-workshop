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

export default { getExportName };
