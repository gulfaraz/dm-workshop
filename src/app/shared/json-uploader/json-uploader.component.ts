import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-json-uploader',
    templateUrl: './json-uploader.component.html',
})
export class JsonUploaderComponent<T> {
    @ViewChild('fileInput') fileInput!: ElementRef;
    @Input() label = 'Upload JSON';
    @Output() uploadEvent = new EventEmitter<T>();

    click = () => this.fileInput.nativeElement.click();

    upload = (event: Event) => {
        const files = (<HTMLInputElement>event.target).files;
        if (files?.length) this.readFile(files[0]);
    };

    readFile = (file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = () =>
            this.uploadEvent.emit(JSON.parse(String(fileReader.result)));
        fileReader.readAsText(file);
    };
}
