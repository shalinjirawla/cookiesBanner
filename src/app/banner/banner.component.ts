import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { ContentData } from './banner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private bannerservice: BannerService, private modalService: NgbModal) { }

  contents: ContentData;
  closeResult: string;
  public showdiv:boolean = false;
  indexId:number=0;
  classList:string;
  public iconExpand:boolean=false;
  public buttonName:any = 'false';


  ngOnInit(): void {
    this.bannerservice.getbannerlist().subscribe((res) => {
      if (res != null) {
        this.contents = res;
        this.contents.accordian.forEach((element,index) => {
          if(element.IsMandatory){
            debugger
            this.indexId = index;
            if(this.indexId==index)
            {
            this.iconExpand=true;
          }else{
            this.iconExpand=false;
          }
            return
          }
        });
      }
    })
  }
  
  /**
   * toggles
   */
  toggles() {

    this.showdiv = !this.showdiv;

    if(this.showdiv)  
      this.buttonName = "true";
    else
      this.buttonName = "false";
  }

  /**
   * open
   */
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * getDismissReason
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
