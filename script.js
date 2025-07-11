const makeChange = (c) => {
   const oneUnit = {p : 1,n : 5,d : 10,q : 25,}
	let res = {"p" : 0,"n" : 0,"d" : 0,"q" : 0,};

	let temp = Number(c);

	while(temp>0)
		{
				if(temp >= oneUnit.q){
					 res.q+=Math.floor(temp / oneUnit.q);
					 temp %= oneUnit.q;
				}
				else if(temp >= oneUnit.d){
					 res.d+=Math.floor(temp / oneUnit.d);
					 temp%=oneUnit.d;
				}
				else if(temp >= oneUnit.n){
					res.n+=Math.floor(temp / oneUnit.n);
					temp %=oneUnit.n;
				}
			    else{
					res.p+=Math.floor(temp / oneUnit.p);
					temp %=oneUnit.p;
			}
		}
	return res;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
