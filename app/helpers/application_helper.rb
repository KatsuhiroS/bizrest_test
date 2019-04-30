module ApplicationHelper
  def javascript_entry_path
    return "#{controller_name}/#{action_name}"
  end
end
