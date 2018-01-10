module LogValidationErrors
  extend ActiveSupport::Concern

  included do
    after_validation :log_errors, if: proc { |m| m.errors }
  end

  def log_errors
    Rails.logger.debug "Validation failed!\n" + errors.full_messages.map { |i| " - #{i}" }.join("\n")
  end
end