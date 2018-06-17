/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
// Revealing module pattern
var calculatorModule = (function() {
    var memory = 0;
    var total = 0;

    var load = function(num) {
        if(typeof num === "number") {
            total = num;
            return total;
        } else {
            alert("Error");
        }
    }

    var getTotal =  function() {
        return total;
    }

    var add = function(num) {
        if(typeof num === "number") {
            total += num;
            return total;
        } else {
            alert("Error");
        }
    }

    var subtract = function(num) {
        if(typeof num === "number") {
            total -= num;
            return total;
        } else {
            alert("Error");
        }
    }

    var multiply = function(num) {
        if(typeof num === "number") {
            total *= num;
            return total;
        } else {
            alert("Error");
        }
    }

    var divide = function(num) {
        if(typeof num === "number") {
            total /= num;
            return total;
        } else {
            alert("Error");
        }
    }

    var recallMemory = function() {
        return memory;
    }

    var saveMemory = function() {
        memory = total;
    }

    var clearMemory = function() {
        memory = 0;
    }


    return{
        load: load, //Property and the function can have the same name.
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        recallMemory: recallMemory,
        saveMemory: saveMemory,
        clearMemory: clearMemory
    }

});

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    // DONE

  /**
   * Return the value of `total`
   * @return { Number }
   */
    // DONE



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    // DONE

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    // DONE

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  // DONE


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  // DONE


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  // DONE


  /**
   * Stores the value of `total` to `memory`
   */
  // DONE


  /**
   * Clear the value stored at `memory`
   */
  // DONE



  /**
   * Validation
   */
  // DONE


