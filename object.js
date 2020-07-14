//https://docs.google.com/spreadsheets/d/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/edit#gid=0

//take this 1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs place into bottom link

//https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json


const url = 'https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json'

fetch(url)
    .then( response => response.json())
    .then (data => {
         //console.log('data', data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map( entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
        })
        app(projects)
        })

    const app = (data) => {
        console.log('app is running')
        console.log(data)
    

    const  createProjectElement  = (project) => {
        const $div = $('<div>')
        $div.append($('<h2>').text(project.title))
        console.log(project.title)
        $div.append($('<p>').text(project.description))
        //$div.append($('<img>').attr('src', project.image))
        $div.append($('<a>').attr('href', project.url).text('link'))
        return $div
    }

    //$('body').append(createProjectElement(data[0]))
    data.forEach( project => {
        const $projectDiv = createProjectElement(project)
        $('body').append($projectDiv)
    })
}

