const libreria = {
    generateDate: function () {
        const d = new Date();
        // DD/MM/YYYY - hh:mm:ss
        const dd = d.getDate().toString();
        const mm = (d.getMonth() + 1).toString();
        const yyyy = d.getFullYear().toString();
        const hh = d.getHours().toString();
        const min = d.getMinutes().toString();
        const ss = d.getSeconds().toString();

        const result = `${dd}/${mm}/${yyyy} - ${hh}:${min}:${ss}`;
        return result;
    }
};

module.exports = libreria;