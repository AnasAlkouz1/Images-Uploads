



String.prototype._find_Number=function(){//FIXME: Find the Only Number
const __NumberArray=[];
const _numbrr=['0','1','2','3','4','5','6','7','8','9']
const __string=[...this]
for(let itam of __string){
if(_numbrr.includes(itam)){
__NumberArray.push(itam)
}


}

// return [String(this),Number(__NumberArray.join(''))]
return Number(__NumberArray.join(''))
}
String.prototype._find_String=function(){//FIXME: Find the Only String
const __StringArray=[];
const _string_charAt=/[a-z]/i;
const __string=[...this]
for(let itam of __string){
if(new RegExp(_string_charAt).test(itam)){
__StringArray.push(itam)
}


}

// return [String(this),String(__StringArray.join(''))]
return String(__StringArray.join(''))
}



String.prototype._find_Number_and_String=function(){//FIXME: Find the  Number and String //return Array
const __NumberArray=[];
const __StringArray=[];
const _numbrr=['0','1','2','3','4','5','6','7','8','9']
const _string_charAt=/[a-z]/i;
const __string=[...this]
for(let itam of __string){
if(_numbrr.includes(itam)){
__NumberArray.push(itam)
}
if(new RegExp(_string_charAt).test(itam)){
__StringArray.push(itam)
}


}

return [String(this),String(__StringArray.join('')),Number(__NumberArray.join(''))]
}




String.prototype._remove_space_v0=function(){//FIXME: remove All space
const __string=escape(this).replace(/%20/gi,'')
const __string_v1=unescape(__string)
// return [String(this),String(__string_v1)]
return String(__string_v1);
}
String.prototype._remove_space_v1=function(){//FIXME: remove space __v1 
const __string=escape(this).replace(/20%/gi,'')
const __string_v1=unescape(__string)
// return [String(this),String(__string_v1)]
return String(__string_v1)
}



String.prototype._find_small_letters=function(){//FIXME: Find the small letters String
const __StringArray=[];
const _string_charAt=/[a-z0-9]/;
const __string=[...this]
for(let itam of __string){
if(new RegExp(_string_charAt).test(itam)){
__StringArray.push(itam)
}


}

// return [String(this),String(__StringArray.join(''))]
return String(__StringArray.join(''));
}
String.prototype._find_big_letters=function(){//FIXME: Find the Big letters String
const __StringArray=[];
const _string_charAt=/[A-Z0-9]/;
const __string=[...this]
for(let itam of __string){
if(new RegExp(_string_charAt).test(itam)){
__StringArray.push(itam)
}


}

// return [String(this),String(__StringArray.join(''))]
return String(__StringArray.join(''));
}



String.prototype.string_spread=function(){
return [...this]
}
Array.prototype.array_spread=function(){
return [...this]
}










