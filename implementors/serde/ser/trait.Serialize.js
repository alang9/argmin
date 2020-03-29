(function() {var implementors = {};
implementors["argmin"] = [{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/executor/struct.Executor.html\" title=\"struct argmin::core::executor::Executor\">Executor</a>&lt;O, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::executor::Executor"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.IterState.html\" title=\"struct argmin::core::IterState\">IterState</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::iterstate::IterState"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminKV.html\" title=\"struct argmin::core::ArgminKV\">ArgminKV</a>","synthetic":false,"types":["argmin::core::kv::ArgminKV"]},{"text":"impl&lt;T, U, H, J&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.NoOperator.html\" title=\"struct argmin::core::NoOperator\">NoOperator</a>&lt;T, U, H, J&gt;","synthetic":false,"types":["argmin::core::nooperator::NoOperator"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.MinimalNoOperator.html\" title=\"struct argmin::core::MinimalNoOperator\">MinimalNoOperator</a>","synthetic":false,"types":["argmin::core::nooperator::MinimalNoOperator"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"argmin/core/enum.WriteToFileSerializer.html\" title=\"enum argmin::core::WriteToFileSerializer\">WriteToFileSerializer</a>","synthetic":false,"types":["argmin::core::observers::file::WriteToFileSerializer"]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.WriteToFile.html\" title=\"struct argmin::core::WriteToFile\">WriteToFile</a>&lt;O&gt;","synthetic":false,"types":["argmin::core::observers::file::WriteToFile"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"argmin/core/enum.ObserverMode.html\" title=\"enum argmin::core::ObserverMode\">ObserverMode</a>","synthetic":false,"types":["argmin::core::observers::ObserverMode"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.OpWrapper.html\" title=\"struct argmin::core::OpWrapper\">OpWrapper</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::opwrapper::OpWrapper"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminResult.html\" title=\"struct argmin::core::ArgminResult\">ArgminResult</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::core::result::ArgminResult"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"argmin/core/enum.CheckpointMode.html\" title=\"enum argmin::core::CheckpointMode\">CheckpointMode</a>","synthetic":false,"types":["argmin::core::serialization::CheckpointMode"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminCheckpoint.html\" title=\"struct argmin::core::ArgminCheckpoint\">ArgminCheckpoint</a>","synthetic":false,"types":["argmin::core::serialization::ArgminCheckpoint"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationReason.html\" title=\"enum argmin::core::TerminationReason\">TerminationReason</a>","synthetic":false,"types":["argmin::core::termination::TerminationReason"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/core/struct.ArgminIterData.html\" title=\"struct argmin::core::ArgminIterData\">ArgminIterData</a>&lt;O&gt;","synthetic":false,"types":["argmin::core::ArgminIterData"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.Brent.html\" title=\"struct argmin::solver::brent::Brent\">Brent</a>","synthetic":false,"types":["argmin::solver::brent::Brent"]},{"text":"impl&lt;P, S&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/cg/struct.ConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::cg::ConjugateGradient\">ConjugateGradient</a>&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::conjugategradient::cg::ConjugateGradient"]},{"text":"impl&lt;P, L, B&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/nonlinear_cg/struct.NonlinearConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient\">NonlinearConjugateGradient</a>&lt;P, L, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::FletcherReeves"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibiere"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::PolakRibierePlus"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>","synthetic":false,"types":["argmin::solver::conjugategradient::beta::HestenesStiefel"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/gaussnewton_linesearch/struct.GaussNewtonLS.html\" title=\"struct argmin::solver::gaussnewton::gaussnewton_linesearch::GaussNewtonLS\">GaussNewtonLS</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::gaussnewton::gaussnewton_linesearch::GaussNewtonLS"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/gaussnewton_method/struct.GaussNewton.html\" title=\"struct argmin::solver::gaussnewton::gaussnewton_method::GaussNewton\">GaussNewton</a>","synthetic":false,"types":["argmin::solver::gaussnewton::gaussnewton_method::GaussNewton"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/gradientdescent/steepestdescent/struct.SteepestDescent.html\" title=\"struct argmin::solver::gradientdescent::steepestdescent::SteepestDescent\">SteepestDescent</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::gradientdescent::steepestdescent::SteepestDescent"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/landweber/struct.Landweber.html\" title=\"struct argmin::solver::landweber::Landweber\">Landweber</a>","synthetic":false,"types":["argmin::solver::landweber::Landweber"]},{"text":"impl&lt;P, L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/backtracking/struct.BacktrackingLineSearch.html\" title=\"struct argmin::solver::linesearch::backtracking::BacktrackingLineSearch\">BacktrackingLineSearch</a>&lt;P, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::linesearch::backtracking::BacktrackingLineSearch"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::ArmijoCondition"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::WolfeCondition"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::StrongWolfeCondition"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>","synthetic":false,"types":["argmin::solver::linesearch::condition::GoldsteinCondition"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/hagerzhang/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/morethuente/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::morethuente::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/neldermead/struct.NelderMead.html\" title=\"struct argmin::solver::neldermead::NelderMead\">NelderMead</a>&lt;O&gt;","synthetic":false,"types":["argmin::solver::neldermead::NelderMead"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/newton/newton_cg/struct.NewtonCG.html\" title=\"struct argmin::solver::newton::newton_cg::NewtonCG\">NewtonCG</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::newton::newton_cg::NewtonCG"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/newton/newton_method/struct.Newton.html\" title=\"struct argmin::solver::newton::newton_method::Newton\">Newton</a>","synthetic":false,"types":["argmin::solver::newton::newton_method::Newton"]},{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.ParticleSwarm.html\" title=\"struct argmin::solver::particleswarm::ParticleSwarm\">ParticleSwarm</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;O as <a class=\"trait\" href=\"argmin/core/trait.ArgminOp.html\" title=\"trait argmin::core::ArgminOp\">ArgminOp</a>&gt;::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"argmin/solver/particleswarm/trait.Position.html\" title=\"trait argmin::solver::particleswarm::Position\">Position</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O::<a class=\"type\" href=\"argmin/core/trait.ArgminOp.html#associatedtype.Param\" title=\"type argmin::core::ArgminOp::Param\">Param</a>: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::particleswarm::ParticleSwarm"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"argmin/solver/particleswarm/trait.Position.html\" title=\"trait argmin::solver::particleswarm::Position\">Position</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.Particle.html\" title=\"struct argmin::solver::particleswarm::Particle\">Particle</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::particleswarm::Particle"]},{"text":"impl&lt;L, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/bfgs/struct.BFGS.html\" title=\"struct argmin::solver::quasinewton::bfgs::BFGS\">BFGS</a>&lt;L, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::quasinewton::bfgs::BFGS"]},{"text":"impl&lt;L, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/dfp/struct.DFP.html\" title=\"struct argmin::solver::quasinewton::dfp::DFP\">DFP</a>&lt;L, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::quasinewton::dfp::DFP"]},{"text":"impl&lt;L, P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/lbfgs/struct.LBFGS.html\" title=\"struct argmin::solver::quasinewton::lbfgs::LBFGS\">LBFGS</a>&lt;L, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::quasinewton::lbfgs::LBFGS"]},{"text":"impl&lt;L, H&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/sr1/struct.SR1.html\" title=\"struct argmin::solver::quasinewton::sr1::SR1\">SR1</a>&lt;L, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::quasinewton::sr1::SR1"]},{"text":"impl&lt;B, R&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/sr1_trustregion/struct.SR1TrustRegion.html\" title=\"struct argmin::solver::quasinewton::sr1_trustregion::SR1TrustRegion\">SR1TrustRegion</a>&lt;B, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::quasinewton::sr1_trustregion::SR1TrustRegion"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>","synthetic":false,"types":["argmin::solver::simulatedannealing::SATempFunc"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/simulatedannealing/struct.SimulatedAnnealing.html\" title=\"struct argmin::solver::simulatedannealing::SimulatedAnnealing\">SimulatedAnnealing</a>","synthetic":false,"types":["argmin::solver::simulatedannealing::SimulatedAnnealing"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/cauchypoint/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::cauchypoint::CauchyPoint\">CauchyPoint</a>","synthetic":false,"types":["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/dogleg/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::dogleg::Dogleg\">Dogleg</a>","synthetic":false,"types":["argmin::solver::trustregion::dogleg::Dogleg"]},{"text":"impl&lt;P&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/steihaug/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::steihaug::Steihaug\">Steihaug</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::trustregion::steihaug::Steihaug"]},{"text":"impl&lt;R&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/trustregion_method/struct.TrustRegion.html\" title=\"struct argmin::solver::trustregion::trustregion_method::TrustRegion\">TrustRegion</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.105/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["argmin::solver::trustregion::trustregion_method::TrustRegion"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()