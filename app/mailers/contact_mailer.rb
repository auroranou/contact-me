class ContactMailer < ApplicationMailer
  default from: 'auroranou@gmail.com'

  def hello(contact)
    @contact = contact
    mail(to: @contact.email, subject: 'Nice to meet you at the WDI meet and hire!')
  end
end
