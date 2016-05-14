
exports.question=function(req,res,nest){
	var answer = req.query.answer || '';
	res.render('quizzes/question', {question: 'Cual es la capital de Italia',answer: answer});
};

exports.check = function(req,res,next) {
	var answer =  req.query.answer || '';
	var resultado = ((req.query.answer == 'Roma' ) ? 'Correcta' : 'Incorrecta');
	res.render('quizzes/result', {result : resultado, answer:answer });
};