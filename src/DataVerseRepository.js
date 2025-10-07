import verseJson from './verse.json';
import { reactive } from 'vue';

export class DataVerseRepository {
  constructor() {
    // Делаем данные реактивными
    this.data = reactive(JSON.parse(JSON.stringify(verseJson)));
  }

  getWordById(id) {
    for (const row of this.data) {
      const result = row.find(word => word.id === id);
      if (result) return result;
    }
  }

  getEmptyContentWordWithVariants(){
    for (const row of this.data) {
      const result = row.find(word => !word.content && word.variants);
      if (result) return result;
    }
  }

  getVariantsById(id) {
    const word = this.getWordById(id);
    if (word) return word.variants;
  }

  setContentByIndexFromVariantsToWordById(id, index) {
    const word = this.getWordById(id);
    if (word && word.variants[index]) {
      word.content = word.variants[index];
    }
  }

  // Добавьте метод для получения реактивных данных
  getReactiveData() {
    return this.data;
  }

  setEditablesTo(status){
    for (const row of this.data) {
      for (const word of row){
        if(word.editable !== undefined) word.editable = status;
      }
    }
  }

  assembly(){
    let verse = "";
    for (const row of this.data) {
      verse += row.map(obj => obj.content).join(" ") + "\n";
    }
    return verse;
  }
}
