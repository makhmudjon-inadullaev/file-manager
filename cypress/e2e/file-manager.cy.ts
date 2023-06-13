describe('File Manager', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    });
    it('Check if we have a title', () => {
        cy.get('header>div').contains('Files').should('have.class', 'arrow-right')
    });
    it('Check if we have trash', () => {
        cy.get('#container').children().should('have.length', 1)
        cy.get('app-trash').should('exist')
    })
    it('Check if trash empty initially', () => {
        cy.get('app-trash>components-item>button').focus().type('{enter}')
        cy.get('#container').children().should('have.length', 0)
    })
    it('We can create new folder', () => {
        cy.get('#container').rightclick().should('exist')
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type('Test folder 1{enter}')
        cy.get('#container').children().should('have.length', 2)
    })
    it('Check if we can go inside new folder', () => {
        let newFolderName = 'Test Folder 1'
        cy.get('#container').rightclick().should('exist')
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`${newFolderName}{enter}`)
        cy.get('app-folder>components-item>button').focus().type('{enter}')
        cy.get('#container').children().should('have.length', 0)
        cy.get('header>div.text-3xl.my-2.items-center.flex.gap-3.ng-star-inserted>div').contains(newFolderName).should('exist')
    })
    it('Check if we can create new folder inside new folder', () => {
        let newFolderName = 'Test Folder 1'
        cy.get('#container').rightclick()
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`${newFolderName}{enter}`)
        cy.get('app-folder>components-item>button').focus().type('{enter}')
        cy.get('#container').rightclick({ force: true })
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`Test Sub Folder 1{enter}`)
        cy.get('app-folder>components-item>button').focus().type('{enter}')
    })
    it('Check if the Breadcrumb working inside new folder', () => {
        let newFolderName = 'Test Folder 1'
        cy.get('#container').rightclick()
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`${newFolderName}{enter}`)
        cy.get('app-folder>components-item>button').focus().type('{enter}')
        cy.get('#container').rightclick({ force: true })
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`Test Sub Folder 1{enter}`)
        cy.get('app-folder>components-item>button').focus().type('{enter}')
        cy.get('a[ng-reflect-router-link="/"]').contains('Files').click()
    })
    it('Check if trash icon is empty trash', () => {
        cy.get('app-trash').find('components-icon-trash').should('exist')
        cy.get('app-trash').find('components-icon-trash-filled').should('not.exist')
    })
    it('Check if trash icon is filled trash', () => {
        cy.get('#container').rightclick()
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`Test Folder 1{enter}`)
        cy.get('app-folder>components-item').rightclick()
        cy.get('#container>app-folder>components-item>button>components-contextmenu>components-menu-contex>div>components-menu-item:nth-child(4)>button').focus().click({ force: true })
        cy.get('app-trash').find('components-icon-trash').should('not.exist')
        cy.get('app-trash').find('components-icon-trash-filled').should('exist')
    })
    it('Check if deleted folder in the trash', () => {
        cy.get('#container').rightclick()
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`Test Folder 1{enter}`)
        cy.get('app-folder>components-item').rightclick()
        cy.get('#container>app-folder>components-item>button>components-contextmenu>components-menu-contex>div>components-menu-item:nth-child(4)>button').focus().click({ force: true })
        cy.get('app-trash>components-item>button').focus().type('{enter}')
        cy.get('#container').children().should('have.length', 1)
    })
    it('Check if can permanently delete folder from trash', () => {
        cy.get('#container').rightclick()
        cy.get('components-contextmenu>components-menu-contex').contains('New Folder').click()
        cy.get('input[placeholder="New Folder"]').type(`Test Folder 1{enter}`)
        cy.get('app-folder>components-item').rightclick()
        cy.get('#container>app-folder>components-item>button>components-contextmenu>components-menu-contex>div>components-menu-item:nth-child(4)>button').focus().click({ force: true })
        cy.get('app-trash>components-item>button').focus().type('{enter}')
        cy.get('#container').children().should('have.length', 1)
        cy.get('#container').children().first().rightclick()
        cy.get('.ng-tns-c3751431320-3.ng-star-inserted > .absolute > :nth-child(2) > .flex').click()
        cy.get('#container').children().should('have.length', 0)
    })
});