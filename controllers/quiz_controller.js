
exports.question=function(req,res,nest){
	res.render('quizzes/question', {question: 'Cual es la capital de Italia'});
};

exports.check = function(req,res,next) {
	var resultado = ((req.query.answer == 'Roma' ) ? 'Correcta' : 'Incorrecta');
	res.render('quizzes/result', {result : resultado });
};