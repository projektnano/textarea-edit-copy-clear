	// aktivera kopiering av text
	document.getElementById('copyButton').addEventListener('click', function() {
	    const textarea = document.getElementById('editableText');
	    const cleanText = textarea.value; // hämta texten
	    navigator.clipboard.writeText(cleanText).then(() => {
	        showMessage("Texten Kopierad");
	    }).catch(err => {
	        console.error('Något gick fel med kopiering: ', err);
	    });
	});

	// återställ text till standardvärdet
	document.getElementById('clearButton').addEventListener('click', function() {
	    const textarea = document.getElementById('editableText');
	    const defaultText = "Detta är en standardtext som inte får rensas.";
	    textarea.value = defaultText; // återställ till standardtext
	    showMessage("Texten Återställd");
	});

	// visa meddelande
	function showMessage(msg) {
	    const message = document.getElementById('message');
	    message.textContent = msg;
	    message.style.display = 'block';
	    setTimeout(() => {
	        message.style.display = 'none';
	    }, 2000);
	}

	// rensa HTML och behåll bara textinnehållet
	function removeHTML() {
	    const textarea = document.getElementById('editableText');
	    textarea.value = textarea.value.replace(/<\/?[^>]+(>|$)/g, ""); // acceptera inte HTML
	}

	// använd oninput för att rensa HTML när text ändras
	document.getElementById('editableText').addEventListener('input', removeHTML);
