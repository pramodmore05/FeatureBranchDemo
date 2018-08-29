import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  data: string[];
  paragraphs: Paragraph[];
  constructor() {
    this.initializeData();
  }
  editorInstance: any;
  editorCreated(editor: any): void {
    console.log(editor);
    console.log(editor.options.modules.toolbar);
    this.editorInstance = editor;

  }
  AddText(): void {
    var range = this.editorInstance.getSelection();
    if (range) {
      this.editorInstance.insertText(range.index, "Pramod");
    }
  }
  valueChanged(id: number): void {
    var range = this.editorInstance.getSelection();
    if (range) {
      this.editorInstance.insertText(range.index, this.paragraphs.find(d => d.id == id).content);
    }
  }

  initializeData() {
    this.paragraphs = [{ id: 1, name: 'Introduction', content: 'Hello Mr <FirstName>, Wel Come.' },
    { id: 2, name: 'First Paragraph', content: 'This is first paragraph.' },
    { id: 3, name: 'Details', content: 'Just go through the details' },
    { id: 4, name: 'Signature', content: 'Please sign below' }];

  }
}

export class Paragraph {
  constructor(public id: number, public name: string, public content: string) { }
}
