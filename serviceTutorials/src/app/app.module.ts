import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainStageComponent } from './main-stage/main-stage.component';
import { Content2Component } from './content2/content2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarkdownContentComponent } from './markdown-content/markdown-content.component';
import { QnaComponent } from './qna/qna.component';
import { QnaServiceService } from './qna/qna-service.service';

const appRoutes: Routes = [
  // path 는 라우트할 경로이며 '/' 없이 시작합니다. , component 는 대체될 컴포넌트입니다. 
  { path: 'main-stage', component: MainStageComponent},
  // :id 는 토큰 파라미터입니다. 라우트 객체에 전달합니다. data는 정적 데이터 (제목: 등) 과같은 정보를 전달합니다. 
  { path: 'content2/:id', component: Content2Component, data: { title: 'Main Content 2'} },

  { path: 'markdown', component: MarkdownContentComponent},
  { path: 'qna', component: QnaComponent},
  // 비어 있는 경로 ''는 기본 경로를 말합니다. url 이 비어 있다면 이 경로로 이동됩니다. 
  // redirect 는 다른 라우트로 리다이렉션 시켜줍니다. 여기서는 /main-stage 로 이동합니다. 
  { path: '', redirectTo: '/main-stage', pathMatch: 'full'},
  // '**'는 아무것도 매치되지 않았을때 이동할 경로를 설정합니다. 
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HeaderComponent,
    FooterComponent,
    MainStageComponent,
    Content2Component,
    PageNotFoundComponent,
    MarkdownContentComponent,
    QnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [QnaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
