const express = require('express')
const moment = require('moment')

const app = express()

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: 'slack_name and track query parameters are required' })
  }

  const response = {
    slack_name,
    current_day: moment().format('dddd'),
    utc_time: moment().utc().format(),
    track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext', // Replace with your GitHub URL
    github_repo_url: 'https://github.com/username/repo', // Replace with your GitHub URL
    status_code: 200
  }

  res.json(response)
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})