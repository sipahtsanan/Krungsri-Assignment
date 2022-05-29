describe('Filter carType until Insurance', () =>{
    before('Open browser and Visit website' , () => {
        cy.visit('https://insurance.tescolotusmoney.com/')
    })
    it('Select Car Insurance',() =>{  
      ///  cy.wait(1000)
        cy.get('.col > .mb-2')
        .should('contain','เปรียบเทียบเบี้ยประกันภัยจาก 4 บริษัทประกันภัยชั้นนำ')
        cy.get('.v-tab--active').click()
    })
    it('Select Car Type as a truck 2 doors',() =>{  
        cy.get('#car_type_selecter_tablet > .layout > .v-btn > .v-btn__content').click()
        cy.get('.desktop__dialog__ul__li--p--active')
        .should('contain','ประเภทรถ')
        cy.get('.modal__cartype__content--container > :nth-child(2) > .button__togglegroup--default > .modal__cartype__button--container > img').click()
    })

    it('Select Car brand as TOYOTA',() =>{  
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','ยี่ห้อรถ')
        cy.get(':nth-child(1) > .button__togglegroup--default > .modalcarbrand__button--content > div > .modal__carbrand__btn--img').click()
    })
  
    it('Select Car series as SUPER WAGON',() =>{  
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','รุ่นรถ')
        cy.get('.modal__carmodel__btngroup--container > :nth-child(9) > .button__togglegroup--default > .modal__carmodel__content > .modal__carmodel__btn---label').click()
    })

    it('Select Car sub-series as SUPER WAGON 3.0',() =>{  
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','รุ่นย่อยรถ')
        cy.get('.modal__carsubmodel__btngroup--container > :nth-child(2) > .button__togglegroup--default > .modal__carsubmodel__content').click()
    })

    it('Select Registered years car as 2556(2013)',() =>{  
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','ปีจดทะเบียนรถ')
        cy.get('[style="margin-top: 32px; text-align: left; margin-left: 35px;"] > :nth-child(9) > .button__togglegroup--default > .modal__caryear__content').click()
    })

    it('Select Insurance level car as Level one, no driver but have a CCTV',() =>{  
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','ชั้นประกันรถ')
        cy.get(':nth-child(1) > .button__togglegroup--default > .modal__producttype__content').click()
        cy.get('.modalproducttype__driver--container > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
        cy.get('.modalproducttype__radiogroup__cameraflag--right > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click()
    })

    it('Verify displaying data after select the filter correctly',() =>{  
        cy.get('.desktop__dialog__ul__li--p--active')
        .should('contain','รถกระบะ 2 ประตู')
        cy.get(':nth-child(2) > .desktop__dialog__ul__li--p--active')
        .should('contain','TOYOTA')
        cy.get(':nth-child(3) > .desktop__dialog__ul__li--p--active')
        .should('contain','SUPER WAGON')
        cy.get(':nth-child(4) > .desktop__dialog__ul__li--p--active')
        .should('contain','SUPER WAGON 3.0')
        cy.get(':nth-child(5) > .desktop__dialog__ul__li--p--active')
        .should('contain','2556')
        cy.get('.desktop__dialog__step--active > .desktop__dialog__ul__li--p--active')
        .should('contain','ชั้น 1')
    })

})