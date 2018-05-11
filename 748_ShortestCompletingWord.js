// Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate
//
// Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.
//
//     It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.
//
//     The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.
//
//     Example 1:
// Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
// Output: "steps"
// Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
//     Note that the answer is not "step", because the letter "s" must occur in the word twice.
//     Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
//     Example 2:
// Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
// Output: "pest"
// Explanation: There are 3 smallest length words that contains the letters "s".
//     We return the one that occurred first.
//     Note:
// licensePlate will be a string with length in range [1, 7].
//     licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
// words will have a length in the range [10, 1000].
//     Every words[i] will consist of lowercase letters, and have length in range [1, 15].

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    var res = [];
    var map = {};
    for (var i = 0; i < licensePlate.length; i++) {
        var letter = licensePlate[i].toLowerCase();
        if (licensePlate[i].match(/[a-z]/i)) {
            if (!map[letter]) {
                map[letter] = 1;
            } else {
                map[letter]++;
            }
        }
    }
    console.log(map);
    for (var j = 0; j < words.length; j++) {
        var temp = Object.assign({}, map);
        for (var k = 0; k < words[j].length; k++) {
            if (words[j][k] in temp) {
                temp[words[j][k]]--;
            }
        }
        console.log(temp);
        var flag = true;
        for (var key in temp) {
            if (temp[key] > 0) {
                flag = false;
            }
        }
        if (flag) {
            res.push(words[j]);
        }
    }
    console.log(res);
    var minLength = Number.POSITIVE_INFINITY;
    for (var l = 0; l < res.length; l++) {
        if (res[l].length < minLength) {
            minLength = res[l].length;
        }
    }
    console.log(minLength);
    for (var m = 0; m < res.length; m++) {
        if (res[m].length === minLength) {
            return res[m];
        }
    }
};

var aaa = ["sort","what","drug","care","life","raise","require","continue","herself","chance","whether","early","also","party","crime","total","imagine","we","father","member","floor","tough","thank","effort","stay","suddenly","research","note","together","too","welcoming","special","it","protect","nature","hundred","night","support","from","factor","moment","pressure","find","wish","study","identify","last","group","bag","worry","data","generation","pick","ten","hotel","third","poor","point","truth","why","boy","edge","professional","wondering","anything","talk","education","either","above","one","much","detail","another","environmental","word","operation","admit","network","task","letter","along","news","police","book","eye","shoot","plant","food","remain","problem","air","myself","part","morning","writer","wide","same","throw","age","with","reduce","yard","hour","weight","growth","explain","center","administration","affect","painting","must","huge","society","dead","beautiful","many","this","trouble","more","suggest","may","compare","board","image","little","serve","rich","nothing","range","write","maybe","cup","leg","remember","mother","over","have","every","baby","political","heat","difference","agency","get","that","choose","quite","international","west","newspaper","he","soldier","up","religious","yes","bar","oh","meet","recently","produce","such","scientist","democratic","victim","paper","rather","staff","occur","present","how","resource","brother","bad","create","black","where","ground","but","during","behavior","wonder","audience","pretty","ahead","disease","example","lie","within","home","job","room","enough","production","matter","natural","mouth","bank","should","public","western","idea","kind","mission","on","purpose","reach","us","consider","willing","nor","player","real","key","lose","form","wishing","score","statement","knowledge","physical","decade","speak","cell","represent","traditional","come","think","hit","seek","fund","war","man","single","sure","necessary","animal","artist","describe","significant","speech","front","summer","building","structure","then","still","economic","environment","meeting","begin","view","station","husband","site","music","service","finger","shot","across","computer","never","town","understand","expert","cancer","add","house","treat","build","table","your","page","worker","rise","reality","senior","say","can","important","at","information","visit","call","majority","control","old","action","window","candidate","them","agent","second","his","bill","cost","manage","per","door","finish","subject","determine","school","attention","welcomed","section","energy","dog","east","memory","a","treatment","series","foreign","happy","state","event","answer","run","become","own","fill","than","beat","office","fight","recent","type","which","ever","order","training","quickly","instead","fact","radio","against","community","death","interest","late","fly","president","time","everyone","land","according","to","security","message","walk","for","star","response","always","onto","thousand","will","role","phone","daughter","capital","strategy","oil","since","management","century","professor","trade","young","economy","its","church","no","government","space","hospital","account","trial","million","give","himself","project","itself","value","child","easy","guy","her","of","less","program","particularly","though","cultural","garden","hold","entire","bring","article","those","do","culture","reason","main","size","hand","challenge","die","interview","claim","peace","sister","turn","adult","strong","act","sign","inside","politics","different","thing","position","marriage","fire","option","nation","wall","exist","open","send","ask","feeling","look","forget","allow","clear","debate","end","experienced","stage","method","return","worrying","scene","none","certain","there","card","head","manager","address","indeed","avoid","like","away","consumer","draw","clearly","whatever","southern","hope","amount","welcome","sell","could","family","thus","story","respond","mean","prepare","maintain","else","face","off","figure","perform","sometimes","accept","water","teach","standard","appear","big","tree","the","minute","blood","whole","condition","keep","need","policy","feel","heart","hear","agreement","customer","media","their","suffer","language","ball","working","gas","fail","issue","body","contain","love","billion","glass","only","you","game","character","experiencing","performance","five","current","past","lay","four","smile","ok","threat","include","team","direction","focus","term","unit","already","skill","movie","voice","light","medical","believe","result","activity","tax","difficult","practice","style","race","seat","me","break","next","business","bed","power","area","cover","through","step","let","notice","parent","rock","course","into","collection","heavy","in","among","long","lead","attorney","name","yet","prove","hang","technology","day","who","pass","stand","success","number","again","pay","however","change","stock","use","line","grow","sit","song","apply","soon","beyond","try","wind","low","learn","yourself","friend","material","foot","quality","perhaps","film","social","goal","property","guess","usually","just","yeah","hot","establish","fine","vote","some","city","evidence","throughout","might","impact","often","deal","improve","after","force","realize","science","charge","question","case","blue","country","region","short","least","attack","certainly","read","born","several","these","she","class","white","general","picture","large","fast","kitchen","plan","risk","particular","discover","help","fish","eat","move","conference","upon","shake","including","central","possible","arm","around","or","not","our","want","major","discuss","here","whom","weapon","pain","machine","former","gun","common","arrive","down","lawyer","loss","source","officer","true","individual","when","so","carry","base","discussion","know","wait","work","most","involve","red","two","without","middle","push","list","happen","be","street","benefit","sport","director","best","opportunity","coach","each","official","north","while","doctor","before","responsibility","health","stuff","wrong","citizen","road","human","ago","safe","by","skin","until","enjoy","receive","price","approach","others","assume","both","nice","reflect","miss","popular","dark","serious","left","follow","experience","they","really","camera","art","anyone","exactly","record","enter","thought","dinner","far","period","population","personal","people","partner","likely","green","participant","rate","new","eight","first","set","movement","great","election","small","three","effect","month","save","organization","design","cold","private","check","simple","report","today","although","world","trip","travel","because","watch","fear","as","piece","stop","defense","any","laugh","specific","share","my","money","put","out","theory","very","author","choice","various","tend","seven","rule","concern","forward","violence","someone","outside","person","field","now","future","commercial","couple","other","free","something","probably","year","industry","close","national","son","test","company","sound","woman","themselves","good","analysis","week","budget","campaign","relate","see","high","model","leader","ability","tonight","deep","take","television","play","investment","show","relationship","magazine","provide","everybody","half","full","evening","listen","civil","catch","reveal","similar","college","sea","once","back","student","decide","alone","girl","box","law","even","make","successful","tell","executive","drop","live","bit","cause","military","if","career","expect","pattern","development","go","hard","patient","measure","history","court","buy","drive","decision","lot","shoulder","employee","legal","whose","somebody","color","join","spend","system","hair","few","product","recognize","dream","federal","spring","wife","argue","side","between","final","available","six","able","about","leave","kill","degree","wear","sing","chair","all","kid","interesting","firm","south","rest","mind","and","financial","authority","sense","especially","top","better","almost","mention","sexual","toward","modern","level","seem","him","situation","actually","indicate","pull","under","teacher","remove","item","owner","season","sex","increase","win","finally","local","everything","would","institution","nearly","behind","right","well","simply","ready","process","surface","cut","develop","place","way","positive","car","later","store","despite","market","prevent","start","offer","agree","fall","near"];
console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]));
console.log(shortestCompletingWord("I450447", aaa));