
const initialState = {
  stack: [],
};

// function lex(stack) {
//   for (var i = 1; i < stack.length; i++) {
//     if (stack[i] == "multiply" || stack[i] == "divide") {
//       const a = stack[i-1];
//       const b = stack[i+1];

//       const newStack = [({
//         mul: () => a * b,
//         div: () => a / b
//       }[stack[i]])(), ...stack.slice(3)];

//       stack = lex(newStack);
//       break;
//     }
//   }
//   return stack
// }

// Use native math evaluation
function lex(stack) {
  let str = "";
  stack.forEach(s => {
    const isOperator = isNaN(Number(s));
    if (!isOperator) 
      return str += +s;
    
    // Convert names to symbols
    str += ({
      "add": "+",
      "subtract": "-",
      "divide": "/",
      "multiply": "*"
    }[s])
  });

  // Boom, dangerous magic
  return eval(str);
}


function rootReducer(state = initialState, action) {

    if (action.type === "ADD_NUMBER") {
      let stack = state.stack.slice();

      if (isNaN(Number(stack[stack.length - 1]))) {
        stack.push(action.payload);
      } else {
        // Append number to end of current stack value (still typing it in)
        stack[stack.length - 1] = stack[stack.length - 1].toString() + action.payload.toString();
      }

      return { stack };
    }

    if (action.type === "APPLY_OPERATION") {
      let stack = state.stack.slice();

      const isLastStackAnOperator = isNaN(Number(stack[stack.length - 1]));
      
      if (action.payload == "clear")
        return { stack: [] };

      if (stack.length == 0) {
        // Nothing to do yet
        return { stack };

      } else if (action.payload == "equals") {
        return { stack: [lex(stack)] };
      } else if (isLastStackAnOperator) {

        // Allow negatives
        if (stack[stack.length - 1] != "subtract" && action.payload == "subtract") {
          stack.push(action.payload);
          return { stack };
        }
        // Last element of stack is an operation
        // Replace previous operation unless previous was a minus
        if (stack[stack.length - 1] != "subtract" && stack[stack.length - 2] != action.payload) {
          stack[stack.length - 1] = action.payload;
        }
      } else {
        // Add operation to stack
        stack.push(action.payload);
      }

      return { stack };
    }

  return state;
}

export default rootReducer;