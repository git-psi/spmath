/* Génération de l'adresse messagerie */

/* Mail + Adresse textuelle */
function mail_to(nom, domaine, sujet) {
		document.write ('<a href="mailto:'+nom+'@'+domaine+'?subject='+sujet+'">'+nom+'@'+domaine+'</a>'); 
		}

/* Mail + Texte : ???? */
function mail_txt(nom, domaine, sujet, texte) {
		document.write ('<a href="mailto:'+nom+'@'+domaine+'?subject='+sujet+'">'+texte+'</a>');
		}
