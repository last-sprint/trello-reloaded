// module.exports = nombrefunion
// agregar botones para cambiar de color

const addColor = {
    init() {
        $('.btn-color').click(addColor.changeColor);
    },
    changeColor(event) {
        alert('siii');    
    }
  
};

module.exports = addColor;