class Contact < ActiveRecord::Base
  validates_presence_of :first_name, :company, :email
  validates_uniqueness_of :email
end