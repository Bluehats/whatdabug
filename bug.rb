class Bug
  attr_accessor :code, :bug_line, :explanation
  def initialize(args)
    self.code = args[:code].html_safe
    self.bug_line = args[:bug_line]
    self.explanation = args[:explanation]
  end

  def to_json
    # format return json

  end
end
