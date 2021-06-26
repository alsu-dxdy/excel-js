// В данном кл б доб изолир соб-ия д/как-л эл, 
// ктр насл-ся от этого класса.
// Чтб пол д-п до этого эл, 
// перед в К-р тот кор эл, на ктр б веш сл-ли
export class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No $root provided for DomListener')
        }
        this.$root = $root
    }    
}
