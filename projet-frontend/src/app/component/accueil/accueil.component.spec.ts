import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*
<div class="container-fluid">
	<div class="articles">
		<div class="col-md-6">
			<div class="row">
				<div class="bloc1">
					<div class="row">
						<div class="col-md-12">
                            <img src="assets/img/article1.jpg" width="60%" height="300px" alt="Bootstrap Image Preview">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<h4 class="titre-article" >
								Lorem ipsum dolor sit amet.
							</h4>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<p>
                                Donec id elit non mi porta gravida at eget metus. Fusce
                                <br> dapibus, 
                                tellus ac cursus commodo, tortor mauris condi
                                <br> men tum nibh, ut fermentum massa justo sit amet risue
                                <br> tiam porta sem malesuada magna euismod.
                                <a href="#">Lire la suite</a>
                            </p>
							
	
						</div>
                    </div>
                    
                    <div class="bloc1">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="assets/img/article2.jpg" width="60%" height="300px" alt="Bootstrap Image Preview">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="titre-article">
                                    Lorem ipsum dolor sit amet.
                                </h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>
                                    Donec id elit non mi porta gravida at eget metus. Fusce
                                    <br> dapibus, 
                                    tellus ac cursus commodo, tortor mauris condi
                                    <br> men tum nibh, ut fermentum massa justo sit amet risue
                                    <br> tiam porta sem malesuada magna euismod.
                                    <a href="#">Lire la suite</a>
                                </p>
                                
        
                            </div>
                        </div>
                    <div class="bloc1">
                        <div class="row">
                            <div class="col-md-12">
                                <img src="assets/img/article3.jpg" width="60%" height="300px" alt="Bootstrap Image Preview">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="titre-article">
                                    Lorem ipsum dolor sit amet.
                                </h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>
                                    Donec id elit non mi porta gravida at eget metus. Fusce
                                    <br> dapibus, 
                                    tellus ac cursus commodo, tortor mauris condi
                                    <br> men tum nibh, ut fermentum massa justo sit amet risue
                                    <br> tiam porta sem malesuada magna euismod.
                                    <a href="#">Lire la suite</a>
                                </p>
                                
        
                            </div>
                        </div>


				</div>
			</div>
        </div>
        dfghjklmkjhgfbd
		<div class="catégorie">
			<div class="row">
				<div class="col-md-12">
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
				</div>
			</div>
		</div>
	</div>
</div>


*/