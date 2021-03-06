class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      # ContactMailer.hello(@contact).deliver_now
      flash[:notice] = "Thanks, #{@contact.first_name}! Let's stay in touch!"
      redirect_to root_path
    else
      render :new
    end
  end

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :company, :email, :message)
  end
end