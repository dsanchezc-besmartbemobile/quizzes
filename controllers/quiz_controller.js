
exports.question=function(req,res,nest){
	res.render('quizzes/question', {question: 'Capital de Italia'});
};

exports.check = function(req,res,next) {
	var resultado = ((req.query.answer == 'Roma' ) ? 'Correcta' : 'Incorrecta');
	res.render('quizzes/result', {result : resultado });
};