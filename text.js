const elements = document.querySelectorAll(".bobby, .surface1 span"); //search for class bobby and surface1 text/span

      for (const el of elements) {
        //run one by one for each element
        const text = el.textContent; //store text in here
        let newHTML = ""; //create a new container for the modified text

        for (let i = 0; i < text.length; i++) {
          //run for the length of the text
          let char = text[i]; //grab the current letter based on the loop

          if (char === " ") {
            //if text is space
            char = "&nbsp;"; //make sure the space is still there
          }

          newHTML += `<span style="--i:${i}">${char}</span>`; //put text in span and add to newHTML
        }

        el.innerHTML = newHTML; //actually creates the html
      }