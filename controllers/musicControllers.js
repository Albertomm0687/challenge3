const controller = {};


controller.list = (req,res) => {
    res.getConnection((err,conn)=>{
        conn.query('SELECT * From users', (err, users) => {
            if(err){
                res.json(err);
            }
            console.log(music);
            
            res.render('music', {

            })
        })
    })
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
    conn.query('INSERT INTO music set ?', [data], (err, music)=> {
    console.log(music);
    res.redirect('/');
    });
 })
};

controller.edit = (re,res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM music WHERE id = ?' [id], (err, music) => {
        res.render('music_edit',{
            data: music[0]
        });
    });
  })  
}

controller.update = (req, res) =>{
    const { id } = req.params;
    const newMusic = req.body;
    req.getConnection ((err, conn) => {
        conn.query('UPDATE music set ? WHERE id = ?',[newMusic, id], (err,rows) => {
        res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM music WHERE id = ?', [id], (err, music) => {
            res.redirect('/');
        });
    })
};

module.exports = controller;