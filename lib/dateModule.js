const libreria = {
    generateDate: function () {
        const d = new Date();
        // DD/MM/YYYY - hh:mm:ss
        const dd = d.getDate();
        const mm = d.getMonth() + 1;
        const yyyy = d.getFullYear();
        const hh = d.getHours();
        const min = d.getMinutes();
        const ss = d.getSeconds();

        const result = `${dd}/${mm}/${yyyy} - ${hh}:${min}:${ss}`;
        return result;
    }
};

module.exports = libreria;