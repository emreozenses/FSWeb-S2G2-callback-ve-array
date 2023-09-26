const { fifaData } = require("./fifa.js");

/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)
const wCresult_2014 = fifaData.filter(wC2014);
function wC2014(item) {
  return item.Year === 2014;
}
console.log(wCresult_2014);
const fHtN_2014 = (arr) => {
  let hTn = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Stage === "Final") {
      hTn = arr[i]["Home Team Name"];
    }
  }
  return hTn;
};
console.log(fHtN_2014(wCresult_2014));

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)

const fAtN_2014 = (arr) => {
  let aTn = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Stage === "Final") {
      aTn = arr[i]["Away Team Name"];
    }
  }
  return aTn;
};
console.log(fAtN_2014(wCresult_2014));

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
const fHtG_2014 = (arr) => {
  let hTg = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Stage === "Final") {
      hTg = arr[i]["Home Team Goals"];
    }
  }
  return hTg;
};
console.log(fHtG_2014(wCresult_2014));

//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
const fAtG_2014 = (arr) => {
  let aTg = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Stage === "Final") {
      aTg = arr[i]["Away Team Goals"];
    }
  }
  return aTg;
};
console.log(fAtG_2014(wCresult_2014));

//(e) 2014 Dünya kupası finali kazananı*/

const fWinner_2014 = (arr) => {
  let winner = "";
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].Stage === "Final" &&
      arr[i]["Home Team Goals"] > arr[i]["Away Team Goals"]
    ) {
      winner = arr[i]["Home Team Name"];
    } else if (
      arr[i].Stage === "Final" &&
      arr[i]["Home Team Goals"] < arr[i]["Away Team Goals"]
    ) {
      winner = arr[i]["Away Team Name"];
    } else if (
      arr[i].Stage === "Final" &&
      arr[i]["Home Team Goals"] == arr[i]["Away Team Goals"]
    ) {
      winner = arr[i]["Win conditions"];
    }
  }
  return winner;
};
console.log(fWinner_2014(wCresult_2014));

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(arr) {
  let finals = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Stage === "Final") {
      finals.push(arr[i]);
    }
  }

  return finals;
  /* kodlar buraya */
}

/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(arr, Finaller) {
  const years = [];
  let finals = Finaller(arr);
  for (let i = 0; i < finals.length; i++) {
    years.push(finals[i].Year);
  }
  console.log(years);
  return years;
}
console.log(Yillar(fifaData, Finaller));

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */

function Kazananlar(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(/* kodlar buraya */) {
  /* kodlar buraya */
}

/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
  /* kodlar buraya */
}

/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */

/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  Finaller,
  Yillar,
  Kazananlar,
  YillaraGoreKazananlar,
  OrtalamaGolSayisi,
};
