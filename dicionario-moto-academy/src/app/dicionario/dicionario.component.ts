// dicionario.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dicionario',
  templateUrl: './dicionario.component.html',
  styleUrls: ['./dicionario.component.css']
})
export class DicionarioComponent {
  word!: string;
  meaning!: string;
  additionalInfo!: string;
  phrases!: string;

  constructor(private http: HttpClient) { }

  async searchWord() {
    if (!this.word) {
      alert('Por favor, digite uma palavra.');
      return;
    }

    try {
      const encodedWord = encodeURIComponent(this.word);
      const response = await this.http.get<any>(`http://localhost:3000/search/${encodedWord}`).toPromise();
      this.displayResult(response);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar informações da palavra.');
    }
  }

  displayResult(data: { meaning: string; additionalInfo: string; phrases: string; }) {
    this.meaning = data.meaning;
    this.additionalInfo = data.additionalInfo;
    this.phrases = data.phrases;
  }

  createPropertyContainer(label: any, value: any) {
    // Implementação da função createPropertyContainer aqui
  }

  speakWord() {
    if (!this.word) {
      alert('Por favor, digite uma palavra.');
      return;
    }

    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.word);
    speechSynthesis.speak(utterance);
  }
}
