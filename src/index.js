// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined") {
        return [];
    }

    return matrix
        .map((item, i) => {
            if (i % 2 === 1) {
                return item.reverse();
            }
            return item;
        })
        .flat();
};
