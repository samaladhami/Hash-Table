class HashTable {
    constructor(size = 0) {
      this.size = size;
      this.buckets = new Array(this.size);
    }
    
    _hash(key) {
      let idx = 0;
      for (let i = 0; i < key.length; i++) {
        idx += key.charCodeAt(i);
      }
      return idx % this.size;
    }
    
    insert(key, value) {
      if(!key || !value) return;
      const idx = this._hash(key);
      
      if(!this.buckets[idx]) {
        this.buckets[idx] = [
          [key, value]
        ];
        return;
      }
      for (let i = 0; i < this.buckets[idx].length; i++) {
        if(this.buckets[idx][i][0] === key) {
          this.buckets[idx][i][1] = value;
          return;
        }
      }
      this.buckets[idx].push([key, value])
    }
    
    remove(key) {
      const idx = this._hash(key);
      const bucket = this.buckets[idx]
      if(!bucket) return;
      
      for (let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          this.buckets[idx].splice(i, 1)
        }
      }
    }
    
    get(key) {
      const idx = this._hash(key);
      const bucket = this.buckets[idx];
      
      if(!bucket) return null;
      
      for (let i = 0; i < bucket.length; i++) {
        if(bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
      
      return null
    }
  }
  
  const ht = new HashTable(25);
  console.log(ht);
  
  ht.insert('mena', 2013);
  ht.insert('elina', 2018);
  ht.insert('mays', 1992);
  ht.insert('mouied', 1959);
  ht.insert('soad', 1964);
  ht.insert('to be removed', 1010101010);
  ht.insert('adel', 1984);
  ht.insert('ahmed', 1987);
  ht.insert('qais', 1990);
  ht.insert('toofy', 1995);
  
  console.log(ht);
  
  console.log(`elina DOB is ${ht.get('elina')}`)
  console.log(`mouied DOB is ${ht.get('mouied')}`)
  console.log(`%$#@#$% DOB is ${ht.get('(`%$#@#$%')}`)
  console.log(`Mena DOB is ${ht.get('mena')}`)
  console.log(`Toofy DOB is ${ht.get('toofy')}`)
  console.log('--------------------------------');
  console.log(`to be removed DOB is ${ht.get('to be removed')}`)
  ht.remove('to be removed')
  console.log(`to be removed DOB is ${ht.get('to be removed')}`)
  
  ht.remove('mena')
  ht.remove('elina')
  ht.remove('mays')
  ht.remove('mouied')
  ht.remove('soad')
  ht.remove('adel')
  ht.remove('ahmed')
  ht.remove('toofy')
  ht.remove('qais');
  
  
  console.log(ht.get('ahmed'))
  
  console.log(ht)
  
  
  