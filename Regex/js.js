/* pour l’activité :

 Il faut que tu me crées une regex qui match tout type d’url, sachant qu’une url c’est :
 * le protocole
 * le user
 * le mot de passe
 * le nom de domaine complet (obligatoire)
 * le port
 * le chemin */
// initialisation du programme


var url, regex_domain, regex, regex_expression, regex_mdp, regex_path, regex_port, regex_protocole, regex_user;
url = "http://Jojo:lApIn@www.example.com:8888/chemin/d/acc%C3%A8s.php?q=req&q2=req2#signets";

regex_protocole = '(https?|ftp|http|steam|mailto|wais|gopher|telnet|git|ssh)';

regex_user = '[-a-z0-9@:%.\_\+~#=]{1,}';

regex_mdp = '[-a-z0-9@:%.\_\+~#=]';

regex_domain = '(www\.)?[a-z0-9@:.\_\+#=~&]{1,256}\.[a-z]{1-6}';

regex_port = '[0-9]{1,65535}';

regex_path = '\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)';


regex_expression = regex_protocole + ':' + '\\/\\/' + '(' + regex_user + ':' + regex_mdp + '@' + ')?' + regex_domain + '(:' + regex_port + ')?' + regex_path;


console.log(regex_expression);

regex = new RegExp(regex_expression);

console.log(regex);

if (url.match(regex)) {

    alert("Hourra !");

} else {

    alert("Bouh !");
}