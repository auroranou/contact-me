class ContactMailer < ApplicationMailer
  default from: ENV['email_username']

  def hello(contact)
    @contact = contact
    mail(to: @contact.email, 
         subject: 'Nice to meet you at the WDI hiring event!')
  end
end
