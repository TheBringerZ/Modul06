function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Siapakah mahasiswa STIKOM dengan NIM 201603009?',
	['Satrio', 'Alfeus', 'Albert', 'Rio'],
	'1'); 
	var q2 = new Question('Jam berapakah dimulainya kuliah pagi di STIKOM?',
	['Jam 6 pagi', 'Jam 7 pagi', 'Jam 8 pagi', 'Jam 9 pagi'],
	'2');
	var q3 = new Question('Siapakah dosen pembimbing jurusan Tehnik Informatika?',
	['Dhany', 'Safar', 'Putu', 'Oskar'],
	'3');
	var q4 = new Question('Gratiskah menggunakan fasilitas internet di STIKOM Yos Sudarso?',
	['Tidak', 'Gratis'],
	'1');
	var q5 = new Question('Apakah nama dari mata kuliah ini?',
	['Pemrograman Web', 'Algoritma', 'Basis Data'],
	'0');

	var questions = [ql, q2, q3, q4, q5];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'exit' || answer == 'Exit' || answer == 'EXIT')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};